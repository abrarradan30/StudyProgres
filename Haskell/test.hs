{- 
main = do  
    putStrLn "Hello, what's your name?"  
    name <- getLine  
    putStrLn ("Hey " ++ name ++ ", welcome!")
-}
{- 
main = do let x = 10
              y = 5
          print(x,y)
-}
{- 
main = do
    if True
       then do 
            let x=1
            print(x+5)
       else do 
            print("False")
-}
f :: Int -> Int
f x = (x^2) - 3

g :: Int -> Int
g x = (2*x) + 5