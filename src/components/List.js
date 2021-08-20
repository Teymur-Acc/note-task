import React from 'react';


const date = new Date().toLocaleDateString()


const List = (props) => {
    return (
        <>
            <div className="list-align">
                {props.notes.map((note, id) => (
                    <div key={id} className='note-list' >
                        <p className="create-note-text"><b>{note.subject}</b></p>
                        <hr/>
                        <p className="create-note-text ">{note.description}</p>
                        <div className="date">{date}</div>
                        <hr/>
                        <div className="items-position">
                            <i className="fab fa-twitter icon-align"
                               aria-hidden="true"/>
                            <i className="fab fa-facebook icon-align"
                               aria-hidden="true"/>
                            <i className="fa fa-share icon-align"
                               aria-hidden="true"/>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )

}

export default List;