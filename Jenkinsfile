pipeline {
  agent none 
  stages {
    stage('Checkout, Test & Build') {
        agent {
          docker {
            image 'node:10-alpine'
            args '-p 3001:3000'
          }
        }
        environment {
          HOME = '.'
        }
        stages {
          stage('Install') {
            steps {
              sh 'npm install'
            }
          }
          stage('Test') {
            steps {
              sh './jenkins/scripts/test.sh'
            }
          }
          stage('Build') {
            steps {
              sh './jenkins/scripts/build.sh'
            }
          }
          stage('Archive') {
            steps {
              archiveArtifacts 'build/**'
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
        sh 'mkdir /var/www/merkit'
        sh 'ls'
        sh 'cp -Rp build/** /var/www/merkit'
        sh 'docker stop merkit || true && docker rm merkit || true'
        sh 'docker run -dit --name merkit -p 8007:80 -v /var/www/merkit/:/usr/local/apache2/htdocs/ httpd:2.4'
      }
    }
  }
}
