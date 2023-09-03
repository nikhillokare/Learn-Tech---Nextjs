"use client";
import { useState } from "react";
import React from "react";

const LanguagesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const languages = [
    { name: "Python", documentationLink: "https://docs.python.org/3/" },
    {
      name: "JavaScript",
      documentationLink:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "Java", documentationLink: "https://docs.oracle.com/en/java/" },
    {
      name: "C#",
      documentationLink: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "Typescript",
      documentationLink: "https://www.typescriptlang.org/docs/",
    },
    {
      name: "Git",
      documentationLink: "https://git-scm.com/doc",
    },
    {
      name: "GitHub",
      documentationLink: "https://docs.github.com/en/get-started",
    },
    {
      name: "SQL",
      documentationLink: "https://www.w3schools.com/sql/default.asp",
    },
    { name: "C++", documentationLink: "https://isocpp.org/" },
    {
      name: "Ruby",
      documentationLink: "https://www.ruby-lang.org/en/documentation/",
    },
    { name: "PHP", documentationLink: "https://www.php.net/docs.php" },
    { name: "Swift", documentationLink: "https://docs.swift.org/" },
    {
      name: "React",
      documentationLink: "https://reactjs.org/docs/getting-started.html",
    },
    {
      name: "Angular",
      documentationLink: "https://angular.io/docs",
    },
    {
      name: "Prompt Enginnering ",
      documentationLink: "https://www.promptingguide.ai/",
    },
    {
      name: "Scipy",
      documentationLink: "https://www.w3schools.com/python/scipy/index.php",
    },
    {
      name: "Statistics",
      documentationLink: "https://www.w3schools.com/statistics/index.php",
    },
    {
      name: "Canvas",
      documentationLink:
        "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
    },
    {
      name: "Vue.js",
      documentationLink: "https://v3.vuejs.org/guide/introduction.html",
    },
    {
      name: "Django",
      documentationLink: "https://docs.djangoproject.com/en/4.1/",
    },
    {
      name: "Ruby on Rails",
      documentationLink: "https://guides.rubyonrails.org/",
    },
    {
      name: "Bootstrap",
      documentationLink:
        "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
    },
    {
      name: "Material-UI",
      documentationLink: "https://mui.com/getting-started/installation/",
    },
    {
      name: "Foundation (CSS Framework)",
      documentationLink: "https://foundation.zurb.com/sites/docs/",
    },
    {
      name: "Semantic UI",
      documentationLink:
        "https://semantic-ui.com/introduction/getting-started.html",
    },
    {
      name: "JavaFX",
      documentationLink: "https://openjfx.io/openjfx-docs/",
    },
    { name: "Qt (C++ Framework)", documentationLink: "https://doc.qt.io/" },
    {
      name: "GTK (C Library for GUI)",
      documentationLink: "https://developer.gnome.org/gtk-tutorial/stable/",
    },
    {
      name: "WinForms",
      documentationLink:
        "https://docs.microsoft.com/en-us/dotnet/desktop/winforms/",
    },
    {
      name: "UIKit",
      documentationLink: "https://developer.apple.com/documentation/uikit",
    },
    {
      name: "Android SDK ",
      documentationLink: "https://developer.android.com/docs",
    },
    {
      name: "Flutter",
      documentationLink: "https://flutter.dev/docs",
    },
    {
      name: "React Native",
      documentationLink: "https://reactnative.dev/docs/getting-started",
    },
    {
      name: "Ionic",
      documentationLink: "https://ionicframework.com/docs",
    },
    {
      name: "Unity UI ",
      documentationLink: "https://docs.unity3d.com/Manual/UI.html",
    },
    {
      name: "SFML",
      documentationLink: "https://www.sfml-dev.org/documentation/",
    },
    {
      name: "libGDX ",
      documentationLink: "https://libgdx.badlogicgames.com/documentation/",
    },
    {
      name: "Electron",
      documentationLink: "https://www.electronjs.org/docs",
    },
    {
      name: "ASP.NET ",
      documentationLink: "https://docs.microsoft.com/en-us/aspnet/",
    },
    {
      name: "Laravel",
      documentationLink: "https://laravel.com/docs",
    },
    {
      name: "Express.js",
      documentationLink: "https://expressjs.com/",
    },
    {
      name: "Hibernate",
      documentationLink: "https://hibernate.org/orm/documentation/5.5/",
    },
    {
      name: "Scala",
      documentationLink: "https://docs.scala-lang.org/",
    },
    {
      name: "Haskell",
      documentationLink: "https://www.haskell.org/documentation/",
    },
    {
      name: "R ",
      documentationLink: "https://cran.r-project.org/manuals.html",
    },
    {
      name: "Perl ",
      documentationLink: "https://perldoc.perl.org/",
    },
    {
      name: "Go",
      documentationLink: "https://golang.org/doc/",
    },
    {
      name: "CSS Tricks",
      documentationLink: "https://css-tricks.com/",
    },
    {
      name: "Mozilla Developer Network (MDN) - CSS",
      documentationLink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Tailwind CSS",
      documentationLink: "https://tailwindcss.com/docs",
    },
    {
      name: "Tailwind UI",
      documentationLink: "https://tailwindui.com/",
    },
    {
      name: "Sass",
      documentationLink: "https://sass-lang.com/",
    },
    {
      name: "NumPy",
      documentationLink: "https://numpy.org/doc/",
    },
    {
      name: "Pandas",
      documentationLink: "https://pandas.pydata.org/pandas-docs/stable/",
    },
    {
      name: "Matplotlib",
      documentationLink: "https://matplotlib.org/stable/contents.html",
    },
    {
      name: "Seaborn",
      documentationLink: "https://seaborn.pydata.org/introduction.html",
    },
    {
      name: "Scikit-Learn",
      documentationLink: "https://scikit-learn.org/stable/user_guide.html",
    },
    {
      name: "TensorFlow",
      documentationLink: "https://www.tensorflow.org/guide",
    },
    {
      name: "PyTorch",
      documentationLink: "https://pytorch.org/docs/stable/index.html",
    },
    {
      name: "Apache Spark",
      documentationLink: "https://spark.apache.org/docs/latest/",
    },
    {
      name: "Apache Kafka",
      documentationLink: "https://kafka.apache.org/documentation/",
    },
    {
      name: "Apache Airflow",
      documentationLink:
        "https://airflow.apache.org/docs/apache-airflow/stable/index.html",
    },
    {
      name: "Hadoop",
      documentationLink: "https://hadoop.apache.org/docs/stable/",
    },
    {
      name: "SQLAlchemy",
      documentationLink: "https://docs.sqlalchemy.org/en/20/",
    },
    {
      name: "Pyspark",
      documentationLink: "https://spark.apache.org/docs/latest/api/python/",
    },
    {
      name: "MySQL",
      documentationLink: "https://dev.mysql.com/doc/",
    },
    {
      name: "PostgreSQL",
      documentationLink: "https://www.postgresql.org/docs/",
    },
    {
      name: "SQLite",
      documentationLink: "https://sqlite.org/docs.html",
    },
    {
      name: "Microsoft SQL Server",
      documentationLink:
        "https://docs.microsoft.com/en-us/sql/sql-server/sql-server-ver15-books-online/",
    },
    {
      name: "MongoDB",
      documentationLink: "https://docs.mongodb.com/",
    },
    {
      name: "Cassandra",
      documentationLink: "https://cassandra.apache.org/doc/latest/",
    },
    {
      name: "Redis",
      documentationLink: "https://redis.io/documentation",
    },
    {
      name: "Couchbase",
      documentationLink:
        "https://docs.couchbase.com/server/7.0/introduction/intro.html",
    },
    {
      name: "Neo4j",
      documentationLink: "https://neo4j.com/docs/",
    },
    {
      name: "InfluxDB",
      documentationLink: "https://docs.influxdata.com/influxdb/v2.0/",
    },
    {
      name: "Apache HBase",
      documentationLink: "https://hbase.apache.org/book.html",
    },

    {
      name: "CockroachDB",
      documentationLink: "https://www.cockroachlabs.com/docs/v21.2/",
    },
    {
      name: "Kotlin",
      documentationLink:
        "https://developer.android.com/courses/android-basics-compose/course?gclid=CjwKCAjw3dCnBhBCEiwAVvLcu5d93E7ZxY-NEg-cVu9UrUBaA9EFKXgmyQBb6_PdNr6XlJJZraAZgRoCg8MQAvD_BwE&gclsrc=aw.ds",
    },
    {
      name: "HTML",
      documentationLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "Docker",
      documentationLink: "https://docs.docker.com/",
    },
    {
      name: "NodeJS",
      documentationLink: "https://nodejs.org/en/docs",
    },
    {
      name: "C Language",
      documentationLink: "https://www.w3schools.com/c/index.php",
    },
    {
      name: "Rust",
      documentationLink: "https://www.rust-lang.org/learn",
    },
    {
      name: "Solidity",
      documentationLink: "https://docs.soliditylang.org/en/v0.8.21/",
    },
    {
      name: "Ethereum",
      documentationLink: "https://ethereum.org/developers/docs/",
    },
    {
      name: "Solana",
      documentationLink: "https://docs.solana.com/",
    },
    {
      name: "Polkadot",
      documentationLink: "https://wiki.polkadot.network/docs/en/",
    },
    {
      name: "Chainlink",
      documentationLink: "https://docs.chain.link/",
    },
    {
      name: "IPFS (InterPlanetary File System)",
      documentationLink: "https://docs.ipfs.io/",
    },
    {
      name: "Web3.js",
      documentationLink: "https://web3js.readthedocs.io/",
    },
    {
      name: "Truffle",
      documentationLink: "https://www.trufflesuite.com/docs/truffle/overview",
    },
    {
      name: "Substrate",
      documentationLink: "https://substrate.dev/docs/en/",
    },
    {
      name: "Metamask",
      documentationLink: "https://docs.metamask.io/",
    },
    {
      name: "Hardhat",
      documentationLink: "https://hardhat.org/",
    },
    {
      name: "Vyper",
      documentationLink: "https://vyper.readthedocs.io/",
    },
    {
      name: "Rust for Substrate",
      documentationLink: "Link to Rust for Substrate Documentation",
    },
    {
      name: "Zokrates",
      documentationLink: "https://zokrates.github.io/",
    },
    {
      name: "Web3.py",
      documentationLink: "https://web3py.readthedocs.io/",
    },
    {
      name: "Ethers.js",
      documentationLink: "https://docs.ethers.io/v5/",
    },
    {
      name: "zkSync",
      documentationLink: "https://zksync.io/",
    },
    {
      name: "IPNS (InterPlanetary Name System)",
      documentationLink: "https://docs.ipfs.io/how-to/ipns/",
    },
    {
      name: "Avalanche",
      documentationLink: "https://docs.avax.network/",
    },
    {
      name: "Machine Learning",
      documentationLink: "https://scikit-learn.org/stable/index.html",
    },
    {
      name: "Deep Learning",
      documentationLink: "https://pytorch.org/docs/stable/index.html",
    },
    {
      name: "Power BI",
      documentationLink: "https://docs.microsoft.com/en-us/power-bi/",
    },
    {
      name: "Tableau",
      documentationLink:
        "https://help.tableau.com/current/guides/get-started-tutorial/en-us/get-started-tutorial-home.htm",
    },
    {
      name: "Computer Vision",
      documentationLink: "https://opencv.org/documentation/",
    },
    {
      name: "NLP (Natural Language Processing)",
      documentationLink: "https://www.nltk.org/",
    },
    {
      name: "EDA (Exploratory Data Analysis)",
      documentationLink:
        "https://towardsdatascience.com/a-gentle-introduction-to-exploratory-data-analysis-f11d843b8184",
    },
    {
      name: "Kubernetes",
      documentationLink: "https://kubernetes.io/docs/",
    },
    {
      name: "Jenkins",
      documentationLink: "https://www.jenkins.io/doc/",
    },
    {
      name: "GitLab CI/CD",
      documentationLink: "https://docs.gitlab.com/",
    },
    {
      name: "Travis CI",
      documentationLink: "https://docs.travis-ci.com/",
    },
    {
      name: "Ansible",
      documentationLink: "https://docs.ansible.com/",
    },
    {
      name: "Zero-Knowledge Proofs (ZKPs)",
      documentationLink: "https://zksnarks.github.io/learn/",
    },
    {
      name: "DeFi (Decentralized Finance)",
      documentationLink: "https://defipulse.com/blog/what-is-defi/",
    },
    {
      name: "NFTs (Non-Fungible Tokens)",
      documentationLink: "https://docs.opensea.io/docs/",
    },
    {
      name: "Layer 2 Scaling Solutions",
      documentationLink: "https://research.paradigm.xyz/rollup-bible",
    },
    {
      name: "Decentralized Identity",
      documentationLink:
        "https://docs.microsoft.com/en-us/azure/active-directory/verifiable-credentials/overview-oidc-conformance",
    },
  ];
  const filteredLanguages = languages.filter((language) =>
    language.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">
        Learn All Technologies
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for a technology"
          className="w-full px-4 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredLanguages.map((language, index) => (
          <a
            key={index}
            href={language.documentationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border font-bold font-serif rounded-lg flex flex-col justify-center items-center text-white-500 hover:underline hover:bg-red-300"
          >
            {language.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LanguagesPage;
