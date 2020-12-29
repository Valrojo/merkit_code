pipeline {
  agent none 
  stages {
    stage('Checkout, Test & Build') {
        agent {
          label 'master'
        }
        environment {
          HOME = '.'
        }
        stages {
          stage('Install') {
            steps {
              sh 'curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -'
              sh 'curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -'
              sh 'echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list'
              sh 'apt install yarn'
              sh 'apt --only-upgrade install docker-compose'
              sh 'yarn install'
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
        sh 'docker-compose down'
        sh 'docker-compose up --build'
      }
    }
  }
}
