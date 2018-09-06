import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../models/user';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService: AuthServiceProvider, public alertCtrl: AlertController) {
  }

  login() {
    if (this.user.email && this.user.password) {
      this.authService.getData('User/Login', this.user).then((result) => {
        if (result) {
          localStorage.setItem('user', JSON.stringify(result));
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
      this.showAlert('Erro', 'Por favor, preencha os dados.');
    }

    // Your app login API web service call triggers 
    this.navCtrl.push(TabsPage, {}, { animate: false });
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
