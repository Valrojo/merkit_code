pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-p 3001:3000'
    }

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

    stage('Deploy') {
      steps {
        pwd()
        sh '''docker kill test-project

docker run -dit --name test-project -p 8081:80 -v /var/www/test-project/:/usr/local/apache2/htdocs/ httpd:2.4'''
      }
    }

  }
  environment {
    HOME = '.'
  }
}