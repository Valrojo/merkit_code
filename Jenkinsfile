pipeline {
  agent {
    label 'master'
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
            sh 'docker rm -f 3e0adc98c4fb'
            sh 'docker rm -f 47d69d706a88'
            sh 'docker rm -f 4275ac4bc098'
            sh 'docker rm -f a9d626e64636'
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
        sh 'rm -rf /var/www/merkit'
        sh 'docker-compose down'
        sh 'docker-compose up --build'
      }
    }
  }
}
