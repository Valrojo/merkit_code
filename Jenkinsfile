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
        sh '''cp -Rp build/** /home/vps218/www/

docker kill example-pipeline

docker run -dit --name example-pipeline -p 8081:80 -v /home/vps218/www/:/usr/local/apache2/htdocs/ httpd:2.4'''
      }
    }

  }
  environment {
    HOME = '.'
  }
}