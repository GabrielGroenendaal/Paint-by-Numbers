
import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

const SeedOption = (props) => {
      let seed = ''
      let history = useHistory()
      let params = useParams();
      
      useEffect( () => {
            if (params) {
                  seed = params.seed
            }
            if (seed) {
                  props.updatePuzzle(seed)
                  history.push('/');
            }
            
      })

      return (
            <div></div>
      )
}


export default SeedOption;

