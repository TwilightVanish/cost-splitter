import {Component, OnDestroy, OnInit, Optional} from '@angular/core';
import {Auth, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink, User} from '@angular/fire/auth';
import {FormBuilder} from '@angular/forms';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private readonly actionCodeSettings = {
    url: environment.redirectUrl,
    handleCodeInApp: true
  };

  currentUser: User;
  emailSent = false;

  emailForm = this.formBuilder.group({
    email: ''
  });

  constructor(@Optional() private auth: Auth, private formBuilder: FormBuilder) {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      signInWithEmailLink(this.auth, email, window.location.href).then((result) => {
        window.localStorage.removeItem('emailForSignIn');
        this.currentUser = result.user;
      });
    }
  }

  ngOnInit(): void {
  }

  async login(): Promise<void> {
    await sendSignInLinkToEmail(this.auth, this.emailForm.value.email, this.actionCodeSettings).then(() => {
        this.emailSent = true;
        window.localStorage.setItem('emailForSignIn', this.emailForm.value.email);
    }).catch((error) => {
      console.log(error);
    });
  }
}
