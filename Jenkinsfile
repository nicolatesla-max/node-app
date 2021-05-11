pipeline {
    agent any
    stages {
        stage('Sonar Scan') {
            steps {
                echo "Scanning started"
                sh "npm install sonarqube-scanner --save-dev"
                sh "npm run sonar"
            }
        }
    }
}
