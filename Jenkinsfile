pipeline {
  agent {
    label 'master'
  } 
  stages {
    stage('Initial Check'){
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
    stage('Checkout, Test & Build') {
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
        sh 'rm -rf /var/www/merkit'
        sh 'docker-compose down'
        sh 'docker-compose up --build'
      }
    }
  }
}
