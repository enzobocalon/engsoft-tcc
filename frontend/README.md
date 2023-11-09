# Repositório de TCCs - Frontend

## Tecnologias utilizadas

- React
- Typescript
- Tanstack Query
- Axios
- Framer Motion

## Explicações

A construção do Frontend, pela forma como o React funciona, possui maiores dificuldades de se adotar a grande maioria das estratégias de Engenharia de Software. O React trabalha de uma maneira focada em programação funcional, através de hooks, componentes e coisas do tipo. Portanto, muito das características de OOP, como herança, polimorfismo, etc são adaptadas para o funcionamento do React e da programação funcional, podendo perder alguns de seus benefícios.
No entanto, é importante ressaltar que o react ainda permite muitos desacoplamentos e a separação de responsabilidades dentro de seus limites: a criação de hooks customizadas (custom hooks) permitem que a lógica de funcionamento de um componente seja separada da sua camada visual, esses mesmos hooks também permitem o reaproveitamento de certas lógicas por toda a aplicação, os componentes permitem que cada parte da aplicação seja desacoplada em sua respectiva camada, de maneira que comuniquem entre si somente através de props (a maneira do React de passar informações através da sua árvore de componentes), ou através de meios externos, como os contexts próprios do React ou emissão de eventos.
Além disso, a criação de camadas como a de services, permite o também desacoplamento das lógicas de requisições do componentes, fazendo com que os mesmos tenham que se comunicar apenas com os services.

Portanto, a aplicação de conceitos como o SOLID são possíveis dentro do ecossistema do React, mas dependendo de algumas adaptações. Por outro lado, decorators, façades, etc são dificeís de serem implementadas dentro do React devido a maneira como a biblioteca funciona.

## Como executar

Primeiro, será necessário utilizar o NodeJS.
Após isso, abra a pasta do documento e execute "npm install" ou "yarn", dependendo do pacote que você tiver.
Depois, crie um .env na root do projeto e coloque VITE_API_URL = http://localhost:3000, ou a URL em que o servidor estiver rodando.
Após isso, execute npm dev ou yarn dev para executar. O projeto será executado em http://localhost:5173
