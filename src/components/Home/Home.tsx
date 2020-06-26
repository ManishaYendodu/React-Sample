import * as React from 'react';
import { Button } from 'reactstrap';
import SiteCarousel from '../Carousel/Carousel';
import Vehicle from '../Vehicle/Vehicle';
import Counter from '../Counter/counter';

interface Props {
    color: string;
 }

export default function Home(props: Props){
    return(
        <div>
            <SiteCarousel />
            <Vehicle />
            <Counter />
        </div>
    )
}