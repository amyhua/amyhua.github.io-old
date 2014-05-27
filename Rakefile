desc "compile and run the site"
task :default do
  pids = [
    spawn("scss --watch assets"),
    spawn("jekyll build --watch"), # put `auto: true` in your _config.yml
    spawn("jekyll serve --watch")
  ]
 
  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end
 
  loop do
    sleep 1
  end
end