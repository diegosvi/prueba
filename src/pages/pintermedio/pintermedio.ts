import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AhorcadoPage} from '../../pages/ahorcado/ahorcado';
import { AdivinaPage} from '../../pages/adivina/adivina';
import { JuegocolPage} from '../../pages/juegocol/juegocol';
import { CartasPage} from '../../pages/cartas/cartas';
import { MoverPage } from "../../pages/mover/mover";
import { default as EntradaPage } from "../entrada/entrada";
import { PequesGameServiceProvider } from "../../providers/peques-game-service/peques-game-service";
/**
 * Generated class for the PintermedioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var htmlCartas = '';
var cartasCompletas = [];

@IonicPage()
@Component({
  selector: 'page-pintermedio',
  templateUrl: 'pintermedio.html',
})

export class PintermedioPage {

  constructor(public pequeGameSrv:PequesGameServiceProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {

  
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PintermedioPage');
    //document.getElementById("ContenedorCartas").innerHTML = htmlCartas;

    //window.addEventListener("click", voltearCarta(this))

  }

  onLogout(){
    this.pequeGameSrv.logout();
    this.navCtrl.push(EntradaPage)
  }
  
    showConfirm(){
      let alert = this.alertCtrl.create({
        title: 'Cerrar Sesion!',
        message: 'Seguro quiere salir',
        buttons: [
          
          {
            text: 'NO',
            role: 'NO',
            handler: () => {
              console.log('Canceled');
          }
  
          },
          {
            text:'SI',
            handler: () => {
              console.log('Ok')
              this.navCtrl.push(EntradaPage);
            }
          }  
  
        ]
      });
  
      alert.present();
    }
  
    irMover(){
      this.navCtrl.push(MoverPage);
    }
  
    irAhorcado(){
      this.navCtrl.push(AhorcadoPage);
    }
  
    irAdivina(){
      this.navCtrl.push(AdivinaPage);
    }
  
    irColores(){
      this.navCtrl.push(JuegocolPage);
    }
  
    irCartas(){
      this.navCtrl.push(CartasPage);
    }


}
