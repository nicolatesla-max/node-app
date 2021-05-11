pipeline {
    agent any
    stages {
        stage('Sonar Scan') {
            steps {
                echo "Scanning started"
                sh "npm run sonar"
            }
        }
    }
}
