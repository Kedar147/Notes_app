import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './Notelist';
import Search from './Search';
import Header from './Header';

const App = () => {
	const [notes, setNotes] = useState(()=>{return JSON.parse(
		localStorage.getItem('react-notes-app-data'))||[
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2021',
		},
	]});

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);



	useEffect(() => {
		if(notes.length>0){
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
		}
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header setDarkmode={setDarkMode} />
				<Search setSearchNotes={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					addnote={addNote}
					deletenote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
