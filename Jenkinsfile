pipeline {
    agent any

    environment {
        NODEJS_VERSION = 'nodejs-18'  // Set Node.js version from Jenkins plugin
        IMAGE_NAME = 'portfolio-app'  // Change this to your app name
        CONTAINER_NAME = 'react-app-container'
    }

    tools {
        nodejs "${NODEJS_VERSION}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ElankumaranR/portfolio.git'
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
        stage('Cleanup') {
            steps {
                script {
                    // Stop and remove the existing container if it exists
                    sh 'docker stop react-app-container || true'
                    sh 'docker rm react-app-container || true'
                }
            }
        }
        stage('Build & Run') {
            steps {
                script {
                    // Build and start the container
                    sh 'docker build -t portfolio-app .'
                    sh 'docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME'
                }
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
