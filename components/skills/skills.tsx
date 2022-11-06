import React from "react";
import { SectionTitle } from "../section/sectionTitle";
import styles from "../../styles/section/sectionContainer.module.scss";
import { SectionSubTitle } from "../section/sectionSubTitle";
import { SkillIcon } from "./skillIcon";

import skillIconStyles from "../../styles/skill/skillIcon.module.scss";

import { SiJavascript } from "react-icons/si";

import angular from "../../public/assets/icons/skills/angular.svg";
import aws from "../../public/assets/icons/skills/aws.svg";
import bootstrap from "../../public/assets/icons/skills/bootstrap.svg";
import chartjs from "../../public/assets/icons/skills/chartjs.svg";
import circleci from "../../public/assets/icons/skills/circleci.svg";
import docker from "../../public/assets/icons/skills/docker.svg";
import express from "../../public/assets/icons/skills/express.svg";
import figma from "../../public/assets/icons/skills/figma.svg";
import firebase from "../../public/assets/icons/skills/firebase.svg";
import graphql from "../../public/assets/icons/skills/graphql.svg";
import html from "../../public/assets/icons/skills/html.svg";
import jenkins from "../../public/assets/icons/skills/jenkins.svg";
import jest from "../../public/assets/icons/skills/jest.svg";
import mongodb from "../../public/assets/icons/skills/mongodb.svg";
import mysql from "../../public/assets/icons/skills/mysql.svg";
import nest from "../../public/assets/icons/skills/nest.svg";
import next from "../../public/assets/icons/skills/next.svg";
import nodejs from "../../public/assets/icons/skills/nodejs.svg";
import puppeteer from "../../public/assets/icons/skills/puppeteer.svg";
import react from "../../public/assets/icons/skills/react.svg";
import redis from "../../public/assets/icons/skills/redis.svg";
import redux from "../../public/assets/icons/skills/redux.svg";
import sass from "../../public/assets/icons/skills/sass.svg";
import springboot from "../../public/assets/icons/skills/springboot.svg";
import tailwind from "../../public/assets/icons/skills/tailwind.svg";
import typescript from "../../public/assets/icons/skills/typescript.svg";
import Image from "next/image";

export const Skills = () => {
  return (
    <div className={styles.sectionContainer}>
      <SectionTitle name="Skills" />
      {/* Frontend skills */}
      <SectionSubTitle name="Frontend" />
      <div className={skillIconStyles.skillsIconContainer}>
        <SkillIcon name="React" imgSrc={react} />
        <SkillIcon name="Redux" imgSrc={redux} />
        <SkillIcon name="Next JS" imgSrc={next} />
        <SkillIcon name="Angular" imgSrc={angular} />
        <SkillIcon name="Html" imgSrc={html} />
        <SkillIcon name="Sass" imgSrc={sass} />
        <SkillIcon name="Tailwind" imgSrc={tailwind} />
        <SkillIcon name="Typescript" imgSrc={typescript} />
        <SkillIcon name="Chartjs" imgSrc={chartjs} />
        <SkillIcon name="Bootstrap" imgSrc={bootstrap} />
      </div>
      <div className={skillIconStyles.skillSeparator}></div>

      {/* Backend skills */}
      <SectionSubTitle name="Backend" />
      <div className={skillIconStyles.skillsIconContainer}>
        <SkillIcon name="Nodejs" imgSrc={nodejs} />
        <SkillIcon name="Graphql" imgSrc={graphql} />
        <SkillIcon name="Spring boot" imgSrc={springboot} />
        <SkillIcon name="Express" imgSrc={express} />
        <SkillIcon name="Redis" imgSrc={redis} />
        <SkillIcon name="Mongodb" imgSrc={mongodb} />
        <SkillIcon name="Mysql" imgSrc={mysql} />
        <SkillIcon name="Nest" imgSrc={nest} />
      </div>

      <div className={skillIconStyles.skillSeparator}></div>

      {/* Tool skills */}
      <SectionSubTitle name="Tools" />
      <div className={skillIconStyles.skillsIconContainer}>
        <SkillIcon name="Puppeteer" imgSrc={puppeteer} />
        <SkillIcon name="Jenkins" imgSrc={jenkins} />
        <SkillIcon name="Figma" imgSrc={figma} />
        <SkillIcon name="Circleci" imgSrc={circleci} />
        <SkillIcon name="Firebase" imgSrc={firebase} />
        <SkillIcon name="Aws" imgSrc={aws} />
        <SkillIcon name="Docker" imgSrc={docker} />
        <SkillIcon name="Jest" imgSrc={jest} />
      </div>

      <div className={skillIconStyles.skillSeparator}></div>

      {/* Design skills */}
      <SectionSubTitle name="Design" />
      <div className={skillIconStyles.skillsIconContainer}>
        <SkillIcon name="Figma" />
        <SkillIcon name="Sketch" />
      </div>

      <div className={skillIconStyles.skillSeparator}></div>

      {/* Database skills */}
      <SectionSubTitle name="Database" />
      <div className={skillIconStyles.skillsIconContainer}>
        <SkillIcon name="My SQL" />
        <SkillIcon name="SQL" />
        <SkillIcon name="Mongo DB" />
        <SkillIcon name="Redis" />
      </div>
      <div className={skillIconStyles.skillSeparator}></div>

            {/* Database skills */}
            <SectionSubTitle name="Others" />
      <div className={skillIconStyles.skillsIconContainer}>
        <SkillIcon name="Circle CI" />
        <SkillIcon name="Cypress JS" />
        <SkillIcon name="Webpack" />
        <SkillIcon name="Grunt" />
      </div>


    </div>
  );
};
