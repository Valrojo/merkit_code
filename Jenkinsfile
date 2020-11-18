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
        sh 'rm -rf /var/www/test-project'
        sh 'mkdir /var/www/test-project'
        sh 'cp -Rp build/** /var/www/test-project'
        sh 'docker stop test-project || true && docker rm test-project || true'
        sh 'docker run -dit --name test-project -p 8001:80 -v /var/www/test-project/:/usr/local/apache2/htdocs/ httpd:2.4'
      }
    }
  }
}