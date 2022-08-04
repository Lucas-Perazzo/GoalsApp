import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644', borderless: true}}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
                /* 
                * Con la propiedad style podemos generar cambios en la animacion del 
                * Pressable, ya que la propiedad Android_Ripple no 
                * tendria efecto en IOS.
                */
               >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        padding: 8,
        color: 'white',
    },
    pressedItem: {
        opacity: 0.5
    }
})