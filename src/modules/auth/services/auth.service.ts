import { Injectable } from '@nestjs/common';
import { SignupDto } from '../types/signup.dto';
import { LoginDto } from '../types/login.dto';

@Injectable()
export class AuthService {

    public signup(signupDto:SignupDto) {
        return signupDto
    }
 
    public login(loginDto:LoginDto) {
        return { da:1234 }
    }
}
