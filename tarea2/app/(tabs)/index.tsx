import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

interface CardProps {
  titulo: string;
  imagenUrl: number;
  children: React.ReactNode;
}

const Card = ({ titulo, children, imagenUrl }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image 
        source={imagenUrl} 
        style={styles.imagen} 
      />
      
      <Text style={styles.titulo}>{titulo}</Text>
      
      <View style={styles.contenido}>
        {children}
      </View>
      
      <Button 
        title="Ver más" 
        onPress={() => alert(`Seleccionaste: ${titulo}`)} 
        color="#4F46E5"
      />
    </View>
  );
};

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Daria y sus amigos</Text>

      <Card 
        titulo="Daria Morgendorffer" 
        imagenUrl={require('../../assets/images/daria.jpg')}
      >
        <Text style={styles.descripcion}>
          Es la protagonista de la serie y es conocida por su sarcasmo y su inteligencia.
        </Text>
      </Card>

      <Card 
        titulo="Jane Lane" 
        imagenUrl={require('../../assets/images/descarga.jpg')}
      >
        <Text style={styles.descripcion}>
          Jane es una artista rebelde que por mas que choque es la mejor amiga de Daria
        </Text>
      </Card>

      <Card 
        titulo="Trent" 
        imagenUrl={require('../../assets/images/descarga (1).jpg')}
      >
        <Text style={styles.descripcion}>
          Trent es el hermano de Jane y en las primeras temporadas el interes amoroso de Daria
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1f2937',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagen: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 5,
  },
  contenido: {
    marginBottom: 15,
  },
  descripcion: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});
