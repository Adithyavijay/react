const heading = React.createElement('div',{id : 'parent'}, [
          React.createElement('div',{id : 'child'}, [
            React.createElement('h1',{id : 'h1'},"this is h1 tag"),
            React.createElement('h2', { id :'h2'} , "this is h2 tag" ) ] ),
            React.createElement('div',{id : 'child'}, [
                React.createElement('h1',{id : 'h1'},"this is h1 tag"),
                React.createElement('h2', { id :'h2'} , "this is h2 tag" ) ] )
             ] )
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)