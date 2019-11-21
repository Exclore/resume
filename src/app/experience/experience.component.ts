import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  emmersionBullets = [
    'Helped develop and deploy a mid-sized application for widespread global use.',
    'Managed server and database resources in the Microsoft Azure cloud environment.',
    'Successfully developed QA processes to improve software quality.',
    'Used a wide variety of technologies and languages to build and improve the application.',
    'Managed a small QA team. ',
    'Worked in an Kanban workflow with a cross functional development and product team.'
  ];

  sirsiBullets = [
  'Provided tier 3 support for a large and complex SaaS software environment.',
  'Troubleshot HTML/CSS/Javascript problems in web applications.',
  'Performed server maintenance and scripted scheduled tasks.',
  'Documented and reported bugs and possible solutions to development for resolution.',
  'Wrote technical articles for instructional and bug related issues.',
  'Worked on many projects and cases simultaneously.'
  ];

  whitecanyonBullets = [
  'Handled high level technical support for data erasure software.',
  'Worked with a wide variety of technical and non-technical customers.',
  'Implemented standalone, PXE, Windows Deployment Server, and remote software deployment.',
  'Customized settings for customer using basic scripting.',
  'Designed custom backgrounds and logos for customers.',
  'Tested various hardware configurations to reproduce reported issues.'
  ];

  constructor() { }

  ngOnInit() {
  }

}
