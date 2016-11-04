module.exports = {
    entry: "./dev/js/index.jsx",
    output: {
        path:'./dev/',
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {
      test: /\.jsx$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015',"react","stage-1"]
      }
    },
    {
        test:/\.css/,
        loader:"style-loader!css-loader"
    }
    
        ]
    }
}