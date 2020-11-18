pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-p 8001:3000'
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
        archiveArtifacts 'build/**'
      }
    }

  }
  environment {
    HOME = '.'
  }
}