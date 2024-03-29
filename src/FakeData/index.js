import FoodData from './FoodData';

const FakeData = [ ...FoodData];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(FakeData);

export default FakeData;