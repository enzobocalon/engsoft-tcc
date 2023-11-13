import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('signin', () => {
    it('should return an access token on successful signin', async () => {
      // Mock the signin function of the authService
      const signinDto: SigninDto = {
        name: 'admin',
        password: 'admin_unifev2023',
      };
      jest.spyOn(authService, 'signin').mockImplementation(async () => ({
        accessToken: 'mockedAccessToken',
      }));

      const result = await authController.signin(signinDto);

      expect(result).toEqual({ accessToken: 'mockedAccessToken' });
    });

    it('should throw UnauthorizedException on invalid credentials', async () => {
      // Mock the signin function of the authService to throw UnauthorizedException
      const signinDto: SigninDto = {
        name: 'invalid_user',
        password: 'invalid_password',
      };
      jest.spyOn(authService, 'signin').mockImplementation(async () => {
        throw new UnauthorizedException('Credenciais inválidas');
      });

      await expect(authController.signin(signinDto)).rejects.toThrowError(
        UnauthorizedException,
      );
    });
  });
});
