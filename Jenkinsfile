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
        sh './jenkins/scripts/deploy.sh'
      }
    }

  }
  environment {
    HOME = '.'
  }
}