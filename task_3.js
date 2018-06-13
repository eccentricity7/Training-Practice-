function Machine(power) 
{
    this._power = power;
    this._enabled = false;
  
    var self = this;
  
    this.enable = function() 
    {
      self._enabled = true;
    };
  
    this.disable = function() 
    {
      self._enabled = false;
    };
}

function Fridge(power) 
{
    Machine.apply(this, arguments);
  
    var food = [];
  
    this.addFood = function() 
    {
      if (!this._enabled) 
      {
        throw new Error("Ошибка! Холодильник не включен!");
      }
      if (food.length + arguments.length > this._power / 100) 
      {
        throw new Error("Ошибка! Не хватает мощности для добавления!");
      }
      for (var i = 0; i < arguments.length; i++) 
      {
        food.push(arguments[i]);
      }
    };
  
    this.getFood = function() 
    {
      return food.slice();
    };
  
}