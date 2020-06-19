import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-match',
  templateUrl: './upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.scss']
})
export class UpcomingMatchComponent implements OnInit {
  upcomingMatchs = [{
    firstMatch: 'Juventus',
    scondMatch: 'Real Soccer',
    firstMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-4.png',
    secondMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-15.png',
    date: 'August 15, 2020',
    venu: ' Allianz Stadium'
  },
  {
    firstMatch: 'Spursvus',
    scondMatch: 'Valenciadd',
    firstMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-16.png',
    secondMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-13.png',
    date: 'August 17, 2020',
    venu: ' Allianz Stadium'
  },
  {
    firstMatch: 'Juventus',
    scondMatch: 'Real Soccer',
    firstMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-4.png',
    secondMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-15.png',
    date: 'August 15, 2020',
    venu: ' Allianz Stadium'
  },
  {
    firstMatch: 'Spursvus',
    scondMatch: 'Valenciadd',
    firstMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-16.png',
    secondMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-13.png',
    date: 'August 17, 2020',
    venu: ' Allianz Stadium'
  }, {
    firstMatch: 'Juventus',
    scondMatch: 'Real Soccer',
    firstMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-4.png',
    secondMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-15.png',
    date: 'August 15, 2020',
    venu: ' Allianz Stadium'
  }];
  latestResult: any = [{
    firstMatch: 'Spursvus',
    scondMatch: 'Valenciadd',
    firstMatchScore: 2,
    secondMatchScore: 1,
    firstMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-16.png',
    secondMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-13.png',
    date: 'August 17, 2020',
    venu: ' Allianz Stadium'
  }, {
    firstMatch: 'Juventus',
    scondMatch: 'Real Soccer',
    firstMatchScore: 1,
    secondMatchScore: 0,
    firstMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-4.png',
    secondMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-15.png',
    date: 'August 15, 2020',
    venu: ' Allianz Stadium'
  },
  {
    firstMatch: 'Spursvus',
    scondMatch: 'Valenciadd',
    firstMatchScore: 0,
    secondMatchScore: 2,
    firstMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-16.png',
    secondMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-13.png',
    date: 'August 17, 2020',
    venu: ' Allianz Stadium'
  }, {
    firstMatch: 'Juventus',
    scondMatch: 'Real Soccer',
    firstMatchScore: 2,
    secondMatchScore: 1,
    firstMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-4.png',
    secondMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-15.png',
    date: 'August 15, 2020',
    venu: ' Allianz Stadium'
  },
  {
    firstMatch: 'Spursvus',
    scondMatch: 'Valenciadd',
    firstMatchScore: 1,
    secondMatchScore: 2,
    firstMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-16.png',
    secondMathcIcon: 'https://demo.goodlayers.com/bigslam/homepages/soccer02/wp-content/uploads/sites/5/2019/09/flag-13.png',
    date: 'August 17, 2020',
    venu: ' Allianz Stadium'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
