pipeline {
  agent none 
  stages {
    stage('Checkout, Test & Build') {
        agent {
          docker { image 'node:latest' }
        }
        environment {
          HOME = '.'
        }
        stages {
          stage('Clean'){
            sh './jenkins/scripts/clean.sh'
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
