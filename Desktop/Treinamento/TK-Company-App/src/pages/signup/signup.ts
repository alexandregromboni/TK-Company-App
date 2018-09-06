import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from '../../models/user';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData: any;
  user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService: AuthServiceProvider, public toastCtrl: ToastController, 
    public alertCtrl: AlertController) {
  }

  signup() {
    if (this.user.email && this.user.password && this.user.name && this.user.birthDate && this.user.gender) {
      this.authService.postData('User/Post', this.user).then((result) => {
        this.responseData = result;
        if (this.responseData) {
          localStorage.setItem('user', JSON.stringify(this.responseData));
          this.showAlert('Sucesso', 'Registro salvo com sucesso!');
          this.navCtrl.push(TabsPage);
        }
        else {
          //this.presentToast("Usuário e/ou senha inválido(s).");
          this.showAlert('Erro', 'Ocorreu um erro ao cadastrar o usuário');
        }
      }, (err) => {
        // Error log
      });
    }
    else {
      this.presentToast("Dados não preenchidos");
    }
  }

  login() {
    //Login page link
    this.navCtrl.push(LoginPage);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  showAlert(title, message) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
