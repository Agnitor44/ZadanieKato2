import React from 'react'
import { Alert, Spinner, Stack, Table } from 'react-bootstrap';
    
    export default function List({list, error, isLoading, location }) {

    const renderRow = (item) => {
        const { dt_txt, main } = item;
        const {humidity, temp} = main;
        return (
            <tr key={dt_txt}>
                <td>{dt_txt}</td>
                <td>{humidity}</td>
                <td>{temp}</td>
              </tr>
        )
    }

    const renderLoadingCover = () => {
        if(isLoading) {
            return(
                <div style={{height:'100%', top:0, bottom:0, width: '100%', display: 'flex', alignItems: 'center', justifyContent:'center', position:'fixed', backgroundColor: 'rgba(0,0,0,0.3)'}}>
                <Spinner/>
        
                </div>
            )
    
        }
    }
 if(!location){
    return null
 }
 if(error) {
    return (
        <Stack style={{margin:'20px'}} >
        <Alert variant='danger'>
            {error}
        </Alert>
            </Stack>
    )

 }
        return (
            <Stack>
                {renderLoadingCover()}

            <Table style={{margin: '20px 0'}} striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Humidity</th>
                <th>Temp</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 && list.map(item => renderRow(item) )}
            </tbody>
          </Table>
          </Stack>
          
          )
    
 
}
