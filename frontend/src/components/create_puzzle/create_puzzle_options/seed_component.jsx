import React from 'react';


import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

const SeedComponent = (props) => {
      let seed = ''
      let params = useParams();
      let history = useHistory();
      useEffect( () => {
            if (params) {
                  seed = params.seed
            }
            if (seed) {
                  props.swap()
            }
            
      })

      return (
            <div></div>
      )
}


export default SeedComponent;
