pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/himadri116/mongodb-crud.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('mongodb-crud') {
                    bat 'docker build -t mongodb-crud-app .'
                }
            }
        }

        stage('Run Containers') {
            steps {
                dir('mongodb-crud') {
                    bat 'docker-compose down'
                    bat 'docker-compose up -d'
                }
            }
        }

        stage('Test App') {
            steps {
                bat 'curl http://localhost:3000'
            }
        }
    }
}