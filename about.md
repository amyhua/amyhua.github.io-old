---
layout: resume
title: About
permalink: /about/
---

<div id="resume" ng-controller="ResumeCtrl">

  <div class="row header">
    <div class="col-xs-6">
      <h1>Amy Hua</h1>
      <h3>Web developer</h3>
    </div>
    <div class="col-xs-6 contact-info">
      <ul>
        <li><a href="mailto: foramyhua@gmail.com">foramyhua@gmail.com</a></li>
        <li>+1 (402) 617-9151</li>
        <li>Skype: <strong>amy.hua90</strong></li>
      </ul>
    </div>
  </div>

  <article class="row">
    <div class="col-md-offset-3 col-md-9">
    <h4>Technical Skillset</h4>
      <div class="level" ng-repeat="skill in skills">
        {(skill.name)}
        <div class="bar">
          <span class="fill fill-{(skill.level)}" />
        </div>
      </div>
      <div class="tools">
        Tools: <span class="tag" ng-repeat="tool in tools">{(tool)}</span>
      </div>
    </div>
  </article>

  <article class="row">
    <div class="col-md-offset-3 col-md-9">
    <h4>Work</h4>
    </div>
  </article>

  <article class="experience row" ng-repeat="exp in experiences">
    <div class="col-md-3">
      <div class="timeframe" ng-if="exp.timeframe">
        {(exp.timeframe | start )} - {(exp.timeframe | end )}
      </div>
      <div class="duration" ng-if="exp.timeframe">
        {(exp.timeframe | duration)}
      </div>
    </div>
    <div class="col-md-9">
      <div class="experience-desc">
        <h1>{(exp.role)}</h1>
        <h2><a ng-href="exp.link" target="_blank">{(exp.org)}</a></h2>
        <p>{(exp.brief)}</p>
        <ul>
          <li ng-repeat="desc in exp.desc">{(desc)}</li>
        </ul>
      </div>
    </div>
  </article>

  <article class="row">
    <div class="col-md-offset-3 col-md-9">
    <h4>Education</h4>
    </div>
  </article>

  <article class="experience row" ng-repeat="exp in education">
    <div class="col-md-3">
      <div class="timeframe" ng-if="exp.timeframe">
        {(exp.timeframe | start )} - {(exp.timeframe | end )}
      </div>
      <div class="duration"></div>
    </div>
    <div class="col-md-9">
      <div class="experience-desc">
        <h1>{(exp.role)}</h1>
        <h2>{(exp.org)}</h2>
        <p>{(exp.brief)}</p>
        <ul>
          <li ng-repeat="desc in exp.desc">{(desc)}</li>
        </ul>
      </div>
    </div>
  </article>
</div>