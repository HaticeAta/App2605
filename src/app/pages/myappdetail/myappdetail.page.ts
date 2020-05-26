import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { Router, ActivatedRoute } from '@angular/router';
import { Myapp } from 'src/app/models/myapp';
import { MyappService } from 'src/app/services/myapp.service';
@Component({
  selector: 'app-myappdetail',
  templateUrl: './myappdetail.page.html',
  styleUrls: ['./myappdetail.page.scss'],
})
export class MyappdetailPage implements OnInit {

  constructor(private navCtrl: NavController,
    private projectService: ProjectService,
    private appService: MyappService,
    private router: Router,
    private route: ActivatedRoute) {
    this.user_id = Number(localStorage.getItem("userId"));
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this._MyApp = JSON.parse(params.special);
      }
    });
  }


  _MyApp: Myapp;
  projects: Project[];
  user_id: Number;

  sliderConfig = {

  }
  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProject(this.user_id).subscribe((data) => {
      this.projects = data;
    })
  }

  cancel() {
    this.navCtrl.navigateForward('/myapp');
  }
}
