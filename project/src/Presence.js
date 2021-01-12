import React, { useState } from 'react';
import './App.css'
import { Button, ListGroup, Card, Table, thead, tbody, ButtonGroup, ButtonToolbar, InputGroup, FormControl } from 'react-bootstrap';


function Presence() {
  const n = [
    {

      nom: "Julia",
      prenom: "Robert"
    },
    {

      nom: "John",
      prenom: "Kennedy"
    },
    {

      nom: "David",
      prenom: "Guetta"
    },
    {

      nom: "Ben",
      prenom: "Ten"
    },
    {

      nom: "Alex",
      prenom: "Cesar"
    },
    {

      nom: "Francis",
      prenom: "Pool"
    },
    {

      nom: "Wade",
      prenom: "Wilson"
    },
    {

      nom: "Jack",
      prenom: "Reacher"
    },
    {

      nom: "Caroline",
      prenom: "Dunord"
    },
    {

      nom: "Benjamin",
      prenom: "Franquelin"
    },

  ]

  const [index, setindex] = useState(0)
  const [uber, setnames] = useState("")
  const [state, setstate] = useState("")
  const [present, setpresent] = useState([])
  const [absent, setabsent] = useState([])
  const [excusé, setexcusé] = useState([])
  const [tous, settous] = useState([])
  const [start, setstart] = useState(false)
  const [final, setfinal] = useState([])
  const passname = (test) => {
    if (test == "1") {
      if (index < n.length) {
        setindex(index + 1)
        setnames(n[index].nom + " " + n[index].prenom);
      }
    }
  }
  const A = (ele) => {
    passname("1");
    if (ele == "excusé") {
      if (index < n.length) {
        settous(() => [...tous, ...[{ nom1: n[index].nom, prenom1: n[index].prenom, state1: ele }]])
        setexcusé(() => [...excusé, ...[{ nomExcusé: n[index].nom, prenomExcusé: n[index].prenom, stateExcusé: ele }]]);
      }
    }
    else if (ele == "Absent") {
      if (index < n.length) {
        settous(() => [...tous, ...[{ nom1: n[index].nom, prenom1: n[index].prenom, state1: ele }]])
        setabsent(() => [...absent, ...[{ nomAbsent: n[index].nom, prenomAbsent: n[index].prenom, stateAbsent: ele }]]);
        
      }
    }
    else if (ele == "present") {
      if (index < n.length) {
        settous(() => [...tous, ...[{ nom1: n[index].nom, prenom1: n[index].prenom, state1: ele }]])
        setpresent(() => [...present, ...[{ nomPresent: n[index].nom, prenomPresent: n[index].prenom, statePresent: ele }]]);
       
      }

    }

  }

const B =(ele2)=>{
  if (ele2 == "Tous") {
    for (let i=0; i<tous.length; i++){
      setfinal(final[i]={nomf: tous[i].nom1,prenomf: tous[i].prenom1,statef: tous[i].state1});
    } ;
  }
  if (ele2 == "Absent") {
    for (let i=0; i<absent.length; i++){
      setfinal(final[i]={nomf: absent[i].nomAbsent,prenomf: absent[i].prenomAbsent,statef: absent[i].stateAbsent});
    } ;
  }
  if (ele2 == "present") {
    for (let i=0; i<present.length; i++){
      setfinal(final[i]={nomf: present[i].nomPresent,prenomf: present[i].prenomPresent,statef: present[i].statePresent});
    } ;
  }
}
  /*function B(ele2) {
    if (ele2 == "Tous") {
      return tous;
    }
    if (ele2 == "Absent") {
      return absent;
    }
    if (ele2 == "present") {
      return present;
    }

  }*/


  return (
    <div >

      
<div>
        
          <div class="container">
            <div class="center">
              <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                <ButtonGroup className="mr-2" aria-label="First group">

                  {start ? null : <Button variant="secondary" onClick={
                    () => {
                      setstart(true);
                      passname("1");
                    }
                  }>commencer</Button>}
                </ButtonGroup>
                <div id="Kz" style={{ color: 'white' }}>{uber}</div>
              </ButtonToolbar>
            </div>
          </div>
          <div class="center">
            <ButtonToolbar
              className="justify-content-between"
              aria-label="Toolbar with Button groups"

            >
              <ButtonGroup aria-label="First group">
                <Button variant="secondary" onClick={() => A("present")}>present</Button>{' '}
                <Button variant="secondary" onClick={() => A("excusé")}>excusé</Button>{' '}
                <Button variant="secondary" onClick={() => A("Absent")}>Absent</Button>{' '}

              </ButtonGroup>

            </ButtonToolbar>
          
       


      
      


        
          <ButtonToolbar
            className="justify-content-between"
            aria-label="Toolbar with Button groups"
          >
            <ButtonGroup aria-label="First group">
              <Button variant="secondary" onClick={() => B("Tous")}>Tous</Button>{' '}
              <Button variant="secondary" onClick={() => B("present")}>present</Button>{' '}
              <Button variant="secondary" onClick={() => B("Absent")}>Absent</Button>{' '}

            </ButtonGroup>

          </ButtonToolbar>
        </div>


      </div>
      <Table striped bordered hover>

        <tbody>
          {final.map(elt=>{return(<tr><td>{elt.nomf+""+elt.prenomf}</td><td>{elt.statef}</td></tr>)})}
         

        </tbody>
      </Table>
    </div>


  )
}

export default Presence;

