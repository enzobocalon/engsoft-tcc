const fs = require('fs');
const pdf = require('pdf-parse');

function getResumo(data) {
  const textLines = data.trim().split('\n');

  const textLinesWithoutEmptyLines = textLines.filter((line) => line !== '').filter(line => line !== ' ');
  const inicioResumo = textLinesWithoutEmptyLines.findIndex(line => line.includes('RESUMO')) + 1;
  const fimResumo = textLinesWithoutEmptyLines.findIndex(line => line.includes('Palavras-chave'));
  
  const resumoLines = textLinesWithoutEmptyLines.slice(inicioResumo, fimResumo);
  return resumoLines.join(' ');
}

function groupTextsByEmptyStrings(textArray) {
  const textGroups = [];
  let currentGroup = [];

  for (const text of textArray) {
    if (text !== ' ') {
      currentGroup.push(text.trim());
    } else if (currentGroup.length > 0) {
      textGroups.push(currentGroup);
      currentGroup = [];
    }
  }

  if (currentGroup.length > 0) {
    textGroups.push(currentGroup);
  }

  return textGroups;
}

function getFirstPageData(data) {
  const textLines = data.trim().split('\n');
  const fim = textLines.findIndex(line => line === 'VOTUPORANGA ') + 2
  const orientador = textLines.findIndex(line => line.includes('Prof. Orientador'));
  const header = textLines.slice(0, fim);
  const datas = groupTextsByEmptyStrings(header);
  return {
    titulo: datas[2].join(' '),
    autores: datas[1].map(author => author.trim()),
    ano: parseInt(header[header.length - 1].trim()),
    orientador: textLines[orientador + 1].trim()
  };
}

function extractInformationFromPDF(pdfPath) {
  const dataBuffer = fs.readFileSync(pdfPath);

  pdf(dataBuffer).then(function (data) {
    const text = data.text;

    const resumo = getResumo(text);
    const header = getFirstPageData(text);
    const finalData = {
      resumo,
      ...header
    }
    console.log(finalData)
  });
}

// Exemplo de uso
const pdfPath = 'tcc.pdf';
extractInformationFromPDF(pdfPath);
