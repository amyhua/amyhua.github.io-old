---
layout: custom
title: Hack the Hub
---

#### General Resources

* **Get data** from a number of government-sponsored open data portals, including **[Boston](https://data.cityofboston.gov), [Somerville](https://data.somervillema.gov/), and soon [Cambridge](http://www.cambridgema.gov/itd/opendata.aspx)** (launching June 2014), [New York City](https://nycopendata.socrata.com/), [Chicago](https://data.cityofchicago.org/), [Los Angeles](https://controllerdata.lacity.org/),... and [many others](http://www.socrata.com/customer-spotlight/), all powered by the Socrata platform.

* **Create your own API-enabled datasets** on [opendata.socrata.com](http://opendata.socrata.com).

* **Have questions or need help during the hackathon?** Feel free to find me during the event, tweet me ([@amyhuaster](http://twitter.com/amyhuaster)), or connect live with Socrata support representatives on [Google Hangout here](https://plus.google.com/events/ctgbej1ttlt7pnltjb75sjm68n0) or on IRC at [dev.socrata.com/irc.html](http://dev.socrata.com/irc.html).

* **Find Socrata developer resources**, including the Socrata Open Data API (SODA) reference and Socrata API client libraries at [dev.socrata.com](http://dev.socrata.com).

* **Filter, group by, and manipulate datasets** directly from the Socrata data portal without writing any code.

* **Build embedable charts, graphs, and maps** directly from Socrata, **without writing any code**... <expand></expand>

  * After creating your visualization through the "Visualize" tab, click on the "Embed" tab:

    <img src="../assets/images/embed_snapshot.png" height="300">

  Example:

  <div style="padding: 20px"><iframe width="500px" title="Crime Incident Reports by Weapon Type" height="425px" src="https://data.cityofboston.gov/w/vwgc-k7be/?cur=XOqti4O4M3T&from=root" frameborder="0" scrolling="no"><a href="https://data.cityofboston.gov/Public-Safety/Crime-Incident-Reports-by-Weapon-Type/vwgc-k7be" title="Crime Incident Reports by Weapon Type" target="_blank">Crime Incident Reports by Weapon Type</a></iframe><p><a href="https://data.cityofboston.gov/Public-Safety/Crime-Incident-Reports-by-Weapon-Type/vwgc-k7be" target="_blank">Direct Link</a></p></div>

<img src="/assets/images/soda_logo.png">

* **Get Socrata data back as a JSON endpoint**, and **query the data** using the Socrata Open Data API (SODA). <expand></expand>

  * See the [official documentation page](http://dev.socrata.com/docs/queries.html).

  * **Export the data as a live JSON API endpoint**


    Every Socrata dataset has an Export tab from which you can download the data (CSV, JSON, XLS, XML, etc.), access it via OData, or grab the API endpoint:

    <img src="../assets/images/export_snapshot.png" height="300">

    For example, to get the JSON endpoint for the [Mayor's 24 Hour Hotline, Service Requests dataset](https://data.cityofboston.gov/City-Services/Mayor-s-24-Hour-Hotline-Service-Requests/awu8-dc52):

    >[http://data.cityofboston.gov/resource/awu8-dc52.json](http://data.cityofboston.gov/resource/awu8-dc52.json)

    The dataset ID, `awu8-dc52`, can be found at the end of any Socrata dataset's URL.

  * **Simple Filters**: filter for a particular value of a specific field.

    >[http://data.cityofboston.gov/resource/e29s-ympv.json?sch_name=%27Guild%20Elementary%27](http://data.cityofboston.gov/resource/e29s-ympv.json?sch_name=%27Guild%20Elementary%27)

  * Do SELECT, WHERE, ORDER, GROUP, and other queries (offset, limit, full text search) through Socrata SQL (SoQL): [See the reference](http://dev.socrata.com/docs/queries.html).

  * Group your data and find the aggregate SUM, COUNT, AVERAGE, MIN, or MAX directly from the API endpoint. E.g., find a list of licensed food establishments in Boston that have failed their health inspection from the [Food Establishment Inspections dataset](https://data.cityofboston.gov/Health/Food-Establishment-Inspections/qndu-wx8w), and rank the establishments by the number of health inspection failures.

    >[http://data.cityofboston.gov/resource/qndu-wx8w.json?$group=businessname&$select=businessname,count(issdttm)&result=HE_Fail](http://data.cityofboston.gov/resource/qndu-wx8w.json?$group=businessname&$select=businessname,count(issdttm)&result=HE_Fail)

  * ORDER data in ascending or descending order

      Ascending:

        http://....$order='money ASC'

      Descending:

        http://....$order='money DESC'

  * Filter data by a given attribute

      http://....$where


* Visit the [Socrata Developer site](dev.socrata.com) or the [Socrata Support Forum](support.socrata.com) for more resources.

* There are over 40 other cities who are hacking for National Day of Civic Hacking right now! Learn more at [hackforchange.org](//hackforchange.org).
