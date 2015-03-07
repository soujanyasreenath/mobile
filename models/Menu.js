exports.getMenuItems = function() {
  var menuJson = [
    {
      'id': '3',
      'name': 'Women',
      'link': '/',
      'sub_menu': [
        {
          'name': 'Work wear',
          'link': '/women-work'
        },{
          'name': 'Party wear',
          'link': '/women-party'
        },{
          'name': 'Casual wear',
          'link': '/women-casual'
        }
      ]
    },{
      'id': '4',
      'name': 'Men',
      'link': '/',
      'sub_menu': [
        {
          'name': 'Work wear',
          'link': '/men-work'
        },{
          'name': 'Party wear',
          'link': '/men-party'
        },{
          'name': 'Casual wear',
          'link': '/men-casual'
        }
      ]
    }
  ];
  return menuJson;
}