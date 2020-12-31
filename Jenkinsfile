pipeline {
  agent none
  stages {
    stage('Check & Clean'){
      agent {
        label 'master'
      }
      environment {
        HOME = '.'
      }
      stages{
        stage("Checking"){
          steps{
            sh './jenkins/scripts/check.sh'
          }
        }
        stage('Clean'){
          steps {
              sh './jenkins/scripts/clean.sh'
          }
        }
      }
    }
    stage('Build') {
      options {
        skipDefaultCheckout()
      }
      agent {
        docker { image 'node:latest' }
      }
      environment {
        HOME = '.'
      }
      stages {     
        stage('Build') {
          steps {
            sh './jenkins/scripts/build.sh'
          }
        }
      }
    }
    stage('Deploy') {
      agent {
        label 'master'
      }
      options {
        skipDefaultCheckout()
      }
      steps {
        sh 'docker-compose up --build -d'
        sh 'docker ps -a'
      }
    }
  }
}
