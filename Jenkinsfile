pipeline {
    agent any

    environment {
        NODEJS_VERSION = 'nodejs-18'  // Set Node.js version from Jenkins plugin
        IMAGE_NAME = 'my-react-app'  // Change this to your app name
        CONTAINER_NAME = 'react-app-container'
    }

    tools {
        nodejs "${NODEJS_VERSION}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/ElankumaranR/portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker ps -a'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed!'
        }
        failure {
            echo 'Build failed. Check logs for errors.'
        }
    }
}
