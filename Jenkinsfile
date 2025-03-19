pipeline {
    agent any

    stages {
        stage('Cleanup Workspace') {
            steps {
                sh 'rm -rf portfolio'
            }
        }

        stage('Clone Repository') {
            steps {
                git branch: 'main', credentialsId: 'github-pat', url: 'https://github.com/ElankumaranR/portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t portfolio-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh '''
                    docker stop portfolio-app || true
                    docker rm portfolio-app || true
                    docker run -d --name portfolio-app -p 3000:3000 portfolio-app
                    '''
                }
            }
        }
    }
}
