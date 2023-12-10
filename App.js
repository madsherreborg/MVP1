import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import AssignmentCreatedScreen from './components/AssignmentCreatedScreen'; // Importer AssignmentCreatedScreen
import CreateProjectScreen from './components/CreateProjectScreen';
import ExperienceScreen from './components/ExperienceScreen';
import SkillsScreen from './components/SkillsScreen';
import CandidateProfileScreen from './components/CandidateProfileScreen';
import AssignmentDescriptionsScreen from './components/AssignmentDescriptionsScreen'; // Sikre korrekt import
import CvListeScreen from './components/CvListeScreen'; // Importér CvListeScreen
import CvShowScreen from './components/CvShowScreen'; // Husk at importere CvShowScreen
import ContactScreen from './components/ContactScreen'; // Husk at importere ContactScreen

// Erstat med din egen Firebase-konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyApfwVqJhk1Hh436kf8JOKPJSeeqqAtuOk",
  authDomain: "godkendelsesopgave-da5ed.firebaseapp.com",
  projectId: "godkendelsesopgave-da5ed",
  storageBucket: "godkendelsesopgave-da5ed.appspot.com",
  messagingSenderId: "324239871746",
  appId: "1:324239871746:web:d1af4c7877ca6f01dc7c1b"
};

// Initialiser Firebase
initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateProject">
        <Stack.Screen name="CreateProject" component={CreateProjectScreen} />
        <Stack.Screen name="Experience" component={ExperienceScreen} />
        <Stack.Screen name="CvShow" component={CvShowScreen} />
        <Stack.Screen name="Skills" component={SkillsScreen} />
        <Stack.Screen name="CvListe" component={CvListeScreen} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
        <Stack.Screen name="CandidateProfile" component={CandidateProfileScreen} />
        <Stack.Screen name="AssignmentCreated" component={AssignmentCreatedScreen} />
        <Stack.Screen name="AssignmentDescriptions" component={AssignmentDescriptionsScreen} />
        {/* Sørg for der ikke er mellemrum eller linjeskift mellem Screen tags */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}