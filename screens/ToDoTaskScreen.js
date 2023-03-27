import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import colors from '../Colors'
import tempData from '../tempData'
import TodoList from '../components/TodoList'
import AddTodoListModal from '../components/AddTodoListModal'


export default class ToDoTaskScreen extends React.Component {
    state = {
        addTodoVisible: false,
        lists: tempData,
        user: {}
    };

    toggleAddTodoModal() {
        this.setState({ addTodoVisible: !this.state.addTodoVisible });
    }

    renderList = list => {
        return <TodoList list={list} updateList={this.updateList} />;
    };

    addList = list => {
        this.setState({ lists: [...this.state.lists, { ...list, id: this.state.lists.length + 1, todos: [] }] });
    };

    updateList = list => {
        this.setState({
            lists: this.state.lists.map(item => {
                return item.id === list.id ? list : item;
            })
        });
    };


    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    visible={this.state.addTodoVisible}
                    onRequestClose={() => this.toggleAddTodoModal()}
                >
                    <AddTodoListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList} />
                </Modal>

                <View style={{ flexDirection: "row" }}>
                    <View style={styles.divider} />
                    <Text style={styles.title}>
                        Todo <Text style={{ fontWeight: "300", color: colors.white }}>Lists</Text>
                    </Text>
                    <View style={styles.divider} />
                </View>

                <View style={{ marginVertical: 48 }}>
                    <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
                        <AntDesign name="plus" size={25} color={colors.darkGreen} />
                    </TouchableOpacity>
                    <Text style={styles.add}>Add Todo List</Text>
                </View>

                <View style={{ height: 275, paddingLeft: 32 }}>
                    <FlatList
                        data={this.state.lists}
                        keyExtractor={item => item.name}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => this.renderList(item)}
                        keyboardShouldPersistTaps="always"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightBlue,
    },
    divider: {
        backgroundColor: colors.darkGreen,
        height: 1,
        flex: 1,
        alignSelf: "center",
    },
    title: {
        fontSize: 38,
        fontWeight: "800",
        color: colors.darkGreen,
        paddingHorizontal: 64,

    },
    addList: {//addList plus button
        borderWidth: 2,
        borderColor: colors.white,
        borderRadius: 4,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",

    },
    add: {
        color: colors.darkGreen,
        fontWeight: "800",
        fontSize: 18,
        marginTop: 20,

    },
});