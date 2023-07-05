import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from '../types/signup.dto';
import { LoginDto } from '../types/login.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @Post('signup')
    async signup(@Body() signupDto: SignupDto) {
      // Call the signup method of the AuthService and pass the signupDto
      const user =  this.authService.signup(signupDto);
  
      // Return the newly created user or a success message
      return user;
    }
  
    @Post('login')
    async login(@Body() loginDto: LoginDto) {
      // Call the login method of the AuthService and pass the loginDto
      const token = await this.authService.login(loginDto);
  
      // Return the authentication token or a success message
      return token;
    }
  }
