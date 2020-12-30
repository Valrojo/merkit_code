pipeline {
  agent {
    label none
  } 
  stages {
    stage('Docker Check'){
      agent {
        label 'master'
      }
      environment {
        HOME = '.'
      }
      stages{
        stage("Checking"){
          steps{
            sh 'pwd'
            sh 'docker ps -a'
          }
        }
      }
    }
    stage('Clean & Build') {
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
        stage('Clean'){
          steps {
            sh './jenkins/scripts/clean.sh'
          }
        }
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
        sh 'docker-compose down'
        sh 'docker-compose up --build'
      }
    }
  }
}
