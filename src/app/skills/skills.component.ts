import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  fontEndSkills = [
    'angularjs',
    'html5',
    'css3',
    'sass',
    'typescript',
    'javascript',
    'nodejs',
    'bootstrap',
    'webpack'
  ];

  backEndSkills = [
    'csharp',
    'cplusplus',
    'dot-net',
    'php',
    'mysql',
    'apache'
  ]

  processSkills = [
    'visualstudio',
    'github',
    'git',
    'slack'
  ]

  constructor() { }

  ngOnInit() {
  }

}
