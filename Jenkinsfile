pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-p 8001:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh './jenkins/scripts/test.sh'
      }
    }

    stage('Build Production') {
      steps {
        sh './jenkins/scripts/deliver.sh'
      }
    }

    stage('Archive') {
      steps {
        archiveArtifacts 'build/**'
      }
    }

  }
  environment {
    HOME = '.'
  }
}